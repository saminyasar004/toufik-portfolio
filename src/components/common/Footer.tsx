export default function Footer() {
    return (
        <footer className="bg-secondary-900/80 text-text-100 py-6">
            <div className="row text-center">
                <p className="text-sm md:text-lg font-medium">
                    Copyright &copy; {new Date().getFullYear()} All rights
                    reserved. Developed by{" "}
                    <a
                        href="https://saminyasar.netlify.app/"
                        target="_blank"
                        className="text-primary-500 transition-all duration-300 hover:underline"
                    >
                        Samin Yasar.
                    </a>
                </p>
            </div>
        </footer>
    );
}
