import Hero from "../component/Hero"
import Projects from "../component/Projects"
import CreateProject from "../component/CreateProject"
import AddButton from "../component/AddButton"

const Home = () => {
  return (
    <>
    <Hero />
    <Projects />
    <div className=" flex justify-center items-center my-5">
        <button type='button'
                className=' inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase
                rounded-full showdow-md hover:bg-green-600 '
                >
                    Load more
        </button>
    </div>
    <CreateProject />
    <AddButton />
    </>
  )
}

export default Home