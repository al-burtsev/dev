const ComingSoon = () => {
    return (
        <section className="entrance-message">
            <div className="h-full col-center gap-10">
                <img src="/images/logo.webp" alt="logo" className="entrance-logo" />
                <div className="text-wrapper">
                    <h3 className="gradient-title">
                        <div>Coming </div>
                        <div>May 26th </div>
                        <div>2026</div>
                    </h3>
                </div>

                <div className="flex-center gap-10">
                    <img src="/images/ps-logo.svg" alt="ps-logo" className="md:w-32 w-20" />
                    <img src="/images/x-logo.svg" alt="xbox-logo" className="md:w-52 w-40" />
                </div>
            </div>
        </section>
    )
}

export default ComingSoon