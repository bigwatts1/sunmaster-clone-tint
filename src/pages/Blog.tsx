import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Window Tinting Blog | Tips, Guides & News | Sunmasters DFW</title>
        <meta
          name="description"
          content="Expert window tinting tips, guides, and industry news from Sunmasters. Learn about automotive tinting, residential film, PPF, ceramic coating, and more for Dallas-Fort Worth."
        />
        <meta name="keywords" content="window tinting blog, car tint tips, home window film guide, PPF care, ceramic coating maintenance, Texas tint laws, DFW window tinting" />
        <link rel="canonical" href="https://sunmastersdfw.com/blog" />
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Blog
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Window Tinting Tips, Guides & News
            </h1>
            <p className="text-muted-foreground text-lg">
              Expert advice on window tinting, paint protection, ceramic coating, and more from the Sunmasters team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-foreground text-2xl mb-8">Featured Article</h2>
          
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors group"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/10 h-64 md:h-auto flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-4xl opacity-20">
                  SUNMASTERS
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {featuredPost.category}
                </span>
                <h3 className="font-heading font-bold text-foreground text-2xl md:text-3xl mt-2 mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="text-primary font-medium inline-flex items-center gap-1 mt-6">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-foreground text-2xl mb-8">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors group"
              >
                <div className="bg-primary/10 h-40 flex items-center justify-center">
                  <span className="text-primary font-heading font-bold text-2xl opacity-20">
                    SUNMASTERS
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-heading font-bold text-foreground text-lg mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-muted-foreground text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact Sunmasters today for a free estimate on window tinting, paint protection, 
            or ceramic coating services.
          </p>
          <ContactLink className="bg-background text-foreground hover:bg-background/90 font-heading uppercase tracking-wider">
            Get Free Estimate
          </ContactLink>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
