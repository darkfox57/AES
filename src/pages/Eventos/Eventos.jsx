import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import blogimg from '../../assets/About.webp'
import Footer from '../../components/Footer/Footer'
import Portada from '../../components/Portada/Portada'
import usePagination from '../../Hooks/usePagination'
import BlogCardPage from '../../components/BlogCardPage/BlogCardPage'
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
import Paginado from '../../components/Paginado/Paginado'

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
  } = usePagination(eventocopy, 8)
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
          {paginatedData.map((post) => (
              <BlogCardPage
                EventPage={true}
                slug={post.slug}
                key={post._id}
                count_view={post.count_view}
                img={post.frontpage}
                title={post.title}
                tags={post.tags}
                date={post.date_in}
                dateOut={post?.date_out}
                description={post.description}
              />
            ))}
          {!paginatedData.length && <h1>No hay resultados</h1>}
          {totalPages !== 0 && (
            <Paginado
              totalPages={totalPages}
              goToPage={goToPage}
            />
          )}
        </GridCardBlog>
        <ContainerMenuBlog>
          <div className="fixedMenu">
            <SearchBlog Event={true} />
            {!showSelect && (
              <>
                <NoticiaDestacada Noticia={posts} EventPage={true} />
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
