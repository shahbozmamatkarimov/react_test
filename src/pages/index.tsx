import Home from "./home/Home";
import Layout from "./layout/Layout";
import "@/assets/globals.css"

export default function Page() {
  return (
    <div>
        <Layout>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </Layout>
        <Home />
    </div>
  )
}