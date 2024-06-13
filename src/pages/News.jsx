import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import PageHeader from '../components/PageHeader'
import images from '../../assets/images'
import BlogPosts from '../components/Blog/BlogPosts'

function News() {
  return (
   <>
<Header />
<PageHeader 
 title="News & Blog"
 currentPage="News & Blog"
 backgroundImage={images.aboutImage}
 breadcrumbs={[
   { label: "Home", path: "/" },
   { label: "News & Blog", path: "/blog" },
 ]}
/>
< BlogPosts sliderBlogPost={false} />
<Footer />
   </>
  )
}

export default News