import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import blogimg from '../../assets/About.webp'
import Footer from '../../components/Footer/Footer'
import Portada from '../../components/Portada/Portada'
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
import FilterProximos from '../../components/ProximoEvento/FilterProximos'

export default function Blog() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.blog.blogs)
  const category = useSelector((state) => state.blog.categories)
  const tags = useSelector((state) => state.blog.tags)
  const postscopy = useSelector((state) => state.blog.copyblogs)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    dispatch(getTags())
  }, [dispatch])

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const {
    currentPage,
    totalPages,
    paginatedData,
    NextPage,
    PreviousPage,
    pageNumbers,
    goToPage,
  } = usePagination(posts, 8)
  //console.log(newpost);
  return (
    <>
      <Portada img={blogimg} titulo="Blog" />
      <BlogBody>
        <div className="filtroOrder">
          {windowWidth <= 1071 && <FilterProximos />}
          <SelectOrder />
        </div>
        <GridCardBlog>
          {paginatedData
            .filter((post) => post.status)
            .map((post) => (
              <BlogCardPage
                slug={post.slug}
                key={post._id}
                img={post.image}
                title={post.title}
                tags={post.tags}
                date={post.createdAt}
                description={post.description}
              />
            ))}
          <BtnPaginado
            currentPage={currentPage}
            totalPages={totalPages}
            PreviousPage={PreviousPage}
            posts={postscopy}
            NextPage={NextPage}
            pageNumbers={pageNumbers}
            goToPage={goToPage}
          />
        </GridCardBlog>
        <ContainerMenuBlog>
          <div className="fixedMenu">
            <SearchBlog />
            {windowWidth >= 1071 && (
              <>
                <NoticiaDestacada />
                <Categorias category={category} posts={posts} />
                <SiguenosRedes />
                <EtiquetasPopular tags={tags} />
              </>
            )}
          </div>
        </ContainerMenuBlog>
        {windowWidth <= 1071 && <SiguenosRedes />}
      </BlogBody>
      <Footer />
    </>
  )
}
