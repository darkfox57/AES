import React, { useEffect } from 'react'
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
import { filterCategory } from '../../redux/actions/blog_actions'
import useConditionalRender from '../../Hooks/useConditionalRender'
import { getAllTags } from '../../redux/actions/event_actions'

export default function Eventos() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.event.events)
  const category = useSelector((state) => state.event.categories)
  const tags = useSelector((state) => state.event.tags)
  const eventocopy = useSelector((state) => state.event.copyEvents)

  useEffect(() => {
    dispatch(getAllTags())
  }, [dispatch])

  const [showSelect] = useConditionalRender(1071)
  const {
    currentPage,
    totalPages,
    paginatedData,
    NextPage,
    PreviousPage,
    pageNumbers,
    goToPage,
  } = usePagination(posts, 8)
  const handleFilter = (e) => {
    dispatch(filterCategory(e.target.value))
  }
  return (
    <>
      <Portada img={blogimg} titulo="Evento" />
      <BlogBody>
        <div className="filtroOrder">
          <SelectOrder
            EventOrder={true}
            handleFilter={handleFilter}
            categorys={category}
            size={showSelect}
          />
        </div>
        <GridCardBlog>
          {paginatedData
            .filter((post) => post.status)
            .map((post) => (
              <BlogCardPage
                EventPage={true}
                slug={post.slug}
                key={post._id}
                img={post.frontpage}
                title={post.title}
                tags={post.tags}
                date={post.createdAt}
                description={post.description}
              />
            ))}
          {!paginatedData.length && <h1>Hola</h1>}
          {totalPages !== 0 && (
            <BtnPaginado
              currentPage={currentPage}
              totalPages={totalPages}
              PreviousPage={PreviousPage}
              posts={posts}
              NextPage={NextPage}
              pageNumbers={pageNumbers}
              goToPage={goToPage}
            />
          )}
        </GridCardBlog>
        <ContainerMenuBlog>
          <div className="fixedMenu">
            <SearchBlog Event={true} />
            {!showSelect && (
              <>
                <NoticiaDestacada Noticia={eventocopy} EventPage={true} />
                <Categorias
                  category={category}
                  posts={posts}
                  typeEvent={true}
                />
                <SiguenosRedes />
                <EtiquetasPopular EventTag={true} tags={tags} />
              </>
            )}
          </div>
        </ContainerMenuBlog>
        {showSelect && <SiguenosRedes />}
      </BlogBody>
      <Footer />
    </>
  )
}
