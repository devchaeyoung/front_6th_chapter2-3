import Header from '@widgets/header/ui/Header.tsx'
import Footer from '@widgets/footer/ui/Footer.tsx'
import PostsManagerPage from '@pages/post-manager/ui/PostsManagerPage.tsx'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <PostsManagerPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
