import Trending from "app/(home)/Trending";
import Tech from "app/(home)/Tech";
import Travel from "app/(home)/Travel"

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          {/* <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts} />
          <Other otherPosts={otherPosts} /> */}
          <div className="hidden md:block">
            {/* <Subscribe /> */}
          </div>
        </div>
        <div className="basis-1/4">
          {/* <Sidebar /> */}
        </div>
      </div>
    </main>
  );
}
