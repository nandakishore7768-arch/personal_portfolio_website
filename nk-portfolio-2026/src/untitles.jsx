import { useState, useEffect, useRef } from 'react'

function Scroll({ children }) {
    const [isVisible, setVisible] = useState(false)

    const domain_reference = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(enteries => {
            for (let entry of enteries) {
                if (entry.isIntersecting) {
                    setVisible(true)
                }
            }
        }, { threshold: 0.20 })

        if (domain_reference.current) {
            observer.observe(domain_reference.current)
        }

        return () => {
            if (domain_reference.current) observer.unobserve(domain_reference.current)
        }
    }, [])

    return (
        <div ref={domain_reference} className={`transition-all duration-1000 ease-out transform ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}>
            {children}
        </div>
    )
}

export default Scroll