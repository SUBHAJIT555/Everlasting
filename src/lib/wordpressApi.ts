// WordPress API types
export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Record<string, unknown>;
  categories: number[];
  tags: number[];
  _links: {
    self: Array<{ href: string }>;
    collection: Array<{ href: string }>;
    about: Array<{ href: string }>;
    author: Array<{ embeddable: boolean; href: string }>;
    replies: Array<{ embeddable: boolean; href: string }>;
    "version-history": Array<{ count: number; href: string }>;
    "predecessor-version": Array<{ id: number; href: string }>;
    "wp:attachment": Array<{ href: string }>;
    "wp:term": Array<{ taxonomy: string; embeddable: boolean; href: string }>;
    "wp:featuredmedia"?: Array<{ embeddable: boolean; href: string }>;
    curies: Array<{ name: string; href: string; templated: boolean }>;
  };
  _embedded?: {
    "wp:featuredmedia"?: WordPressMedia[];
  };
}

export interface WordPressMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Record<string, unknown>;
  description: {
    rendered: string;
  };
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: Record<string, {
      file: string;
      width: number;
      height: number;
      mime_type: string;
      source_url: string;
    }>;
    image_meta: Record<string, unknown>;
  };
  source_url: string;
  _links: Record<string, unknown>;
}

// Blog interface matching the component's expected format
export interface Blog {
  id: number;
  img: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  tags?: string[];
  author?: string;
  link?: string;
}

const WORDPRESS_API_BASE = "https://exhibitionstandsuae.ae/blogs/wp-json/wp/v2";

/**
 * Fetch latest blog posts from WordPress
 */
export async function fetchLatestBlogs(limit: number = 3): Promise<Blog[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_BASE}/posts?per_page=${limit}&_embed=true&orderby=date&order=desc`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }

    const posts: WordPressPost[] = await response.json();

    // Transform WordPress posts to Blog format
    const blogs: Blog[] = posts.map((post) => {
        // Extract featured image URL from embedded media
        let imageUrl = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"; // fallback image
        
        if (post._embedded?.["wp:featuredmedia"]?.[0]) {
          const media = post._embedded["wp:featuredmedia"][0];
          imageUrl = media.source_url || 
                     media.media_details?.sizes?.large?.source_url || 
                     media.media_details?.sizes?.medium?.source_url || 
                     imageUrl;
        } else if (post.featured_media) {
          // Fallback: try to fetch media if not embedded
          // Note: This is synchronous, so we'll use fallback for now
          // In production, you might want to handle this differently
        }

        // Extract excerpt/description
        const excerpt = post.excerpt?.rendered || post.content?.rendered || "";
        // Remove HTML tags and limit length
        const plainText = excerpt
          .replace(/<[^>]*>/g, "")
          .replace(/&[^;]+;/g, " ")
          .trim()
          .substring(0, 200);

        // Format date
        const date = new Date(post.date);
        const formattedDate = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        return {
          id: post.id,
          img: imageUrl,
          title: post.title.rendered,
          description: plainText || "No description available.",
          date: formattedDate,
          link: post.link,
        };
      });

    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}
