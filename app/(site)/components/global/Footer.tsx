export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-44">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
        <small className=" duration-200 font-mono">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>

        <small className="hover:text-white duration-200">
          <a
            href="https://github.com/riltonbispo/sanity-portfolio"
            target="_blank"
            rel="noreferrer noopener"
          >
            Desenvolvido por{' '}
            <span className="text-yellow-500">Rilton Bispo</span>
          </a>
        </small>
      </div>
    </footer>
  )
}
