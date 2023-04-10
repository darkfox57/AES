import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import blogimg from '../../assets/About.webp'
//import BlogCard from '../../components/Blog/BlogCard'
import Footer from '../../components/Footer/Footer'
import Portada from '../../components/Portada/Portada'
//import { getAllBlogs, getCategories } from '../../redux/actions/blog_actions'
import usePagination from '../../Hooks/usePagination'
import BlogCardPage from '../../components/BlogCardPage/BlogCardPage'
import BtnPaginado from '../../components/BtnPaginado/BtnPaginado'
import Categorias from '../../components/MenuBlogPage/Categoria/Categorias'
import EtiquetasPopular from '../../components/MenuBlogPage/Etiquetas/EtiquetasPopular'
import NoticiaDestacada from '../../components/MenuBlogPage/Noticia/NoticiaDestacada'
import SearchBlog from '../../components/MenuBlogPage/Search/SearchBlog'
import SiguenosRedes from '../../components/MenuBlogPage/Siguenos/SiguenosRedes'
import { BlogBody, ContainerMenuBlog, GridCardBlog } from './blog.styles'
import SelectOrder from '../../components/SelectBlogOrder/SelectOrder'
import { getTags } from '../../redux/actions/blog_actions'

export default function Blog() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.blog.blogs)
  const category = useSelector((state) => state.blog.categories)
  const tags = useSelector(state=> state.blog.tags)

  useEffect(() => {
    dispatch(getTags())
  },[])
  
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
    <>
      <Portada img={blogimg} titulo="Blog" />
      
      <BlogBody>
        <div className='filtroOrder'>
        <SelectOrder/>
       </div>
        <GridCardBlog>
          {paginatedData
            .filter((post) => post.status)
            .map((post, i) => (
              <BlogCardPage
                key={post._id}
                img={post.image}
                title={post.title}
                tags={post.tags}
                date={post.createdAt}
                description={post.description}
              />
            ))}
          <BtnPaginado
            PreviousPage={PreviousPage}
            posts={posts}
            NextPage={NextPage}
            pageNumbers={pageNumbers}
            goToPage={goToPage}
          />
        </GridCardBlog>
        <ContainerMenuBlog>
          <SearchBlog />
          <NoticiaDestacada />
          <Categorias category={category} posts={posts} />
          <SiguenosRedes />
          <EtiquetasPopular tags={tags} />
        </ContainerMenuBlog>
      </BlogBody>
      <Footer />
    </>
  )
}
