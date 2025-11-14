// Debug Script to Check Banner Images in Database
// You can run this in your browser console on the admin dashboard page

async function checkBannerImages() {
  try {
    const response = await fetch('/api/admin/blogs');
    const blogs = await response.json();
    
    console.log('=== BLOG BANNER IMAGE DEBUG ===');
    console.log('Total blogs:', blogs.length);
    
    blogs.forEach(blog => {
      console.log(`\nBlog: ${blog.title}`);
      console.log(`ID: ${blog.id}`);
      console.log(`Banner Image: ${blog.banner_image || 'NULL/EMPTY'}`);
      console.log(`Has Banner: ${!!blog.banner_image}`);
      console.log(`Banner Length: ${blog.banner_image ? blog.banner_image.length : 0}`);
    });
    
    const blogsWithBanners = blogs.filter(blog => blog.banner_image);
    console.log(`\nBlogs with banner images: ${blogsWithBanners.length}`);
    
    return blogs;
  } catch (error) {
    console.error('Error checking banner images:', error);
  }
}

// Run the check
checkBannerImages();