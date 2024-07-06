export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About BlogHub
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              BlogHub is a dynamic and user-friendly blogging platform built
              using the MERN stack (MongoDB, Express.js, React, and Node.js).
              Designed for bloggers and readers alike, BlogHub offers a seamless
              experience for content creation, management, and consumption. Our
              platform leverages JWT for secure authentication, ensuring that
              users' data and interactions are safe and protected.
            </p>

            <p>
              BlogHub features an intuitive interface that makes it easy to
              write, edit, and publish blog posts. Readers can enjoy real-time
              updates, rich content, and a responsive design that looks great on
              any device. Our goal is to create a community where ideas and
              stories can be shared effortlessly, fostering engagement and
              connection among users.
            </p>

            <p>
              Whether you are an avid blogger or a casual reader, BlogHub
              provides the tools and features you need to stay connected and
              inspired. Join us on BlogHub and be a part of a vibrant and
              growing community of content creators and enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
