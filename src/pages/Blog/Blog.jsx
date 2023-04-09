import React from 'react'
import {  useSelector } from 'react-redux'
import blogimg from '../../assets/About.webp'
//import BlogCard from '../../components/Blog/BlogCard'
import Footer from '../../components/Footer/Footer'
import Portada from '../../components/Portada/Portada'
//import { getAllBlogs, getCategories } from '../../redux/actions/blog_actions'
import { BlogBody, ContainerMenuBlog, GridCardBlog } from './blog.styles'
import BlogCardPage from '../../components/BlogCardPage/BlogCardPage'
import SearchBlog from '../../components/MenuBlogPage/Search/SearchBlog'
import usePagination from '../../Hooks/usePagination'
import BtnPaginado from '../../components/BtnPaginado/BtnPaginado'
import NoticiaDestacada from '../../components/MenuBlogPage/Noticia/NoticiaDestacada'
import Categorias from '../../components/MenuBlogPage/Categoria/Categorias'
import SiguenosRedes from '../../components/MenuBlogPage/Siguenos/SiguenosRedes'
import EtiquetasPopular from '../../components/MenuBlogPage/Etiquetas/EtiquetasPopular'

export default function Blog() {
  ///const dispatch = useDispatch()
  const posts = useSelector((state) => state.blog.blogs)
  const category = useSelector((state) => state.blog.categories)

  /*useEffect(() => {
    dispatch(getAllBlogs())
    dispatch(getCategories())
  },[])*/
  
  const {
    currentPage,
    totalPages,
    paginatedData,
    NextPage,
    PreviousPage,
    pageNumbers,
    goToPage,
  } = usePagination(posts, 8)

  return (
    console.log(posts),
    <>
      <Portada img={blogimg} titulo="Blog" />
      <BlogBody>
        <GridCardBlog>
          {paginatedData.map((post, i) => (
            <BlogCardPage
              key={post._id}
              img={post.image}
              title={post.title}
              status={post.status}
              date={post.createdAt}
              slug={post.slug}
              description={post.description}
            />
          ))}
          <BtnPaginado PreviousPage={PreviousPage} posts={posts} NextPage={NextPage} pageNumbers={pageNumbers} goToPage={goToPage} />
        </GridCardBlog>
        <ContainerMenuBlog>
          <SearchBlog />
          <NoticiaDestacada/>
          <Categorias category={category} posts={posts} />
          <SiguenosRedes/>
          <EtiquetasPopular/>
        </ContainerMenuBlog>
      </BlogBody>
      <Footer/>
    </>
  )
}
