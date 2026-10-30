

const Section = ({title, titleAlign = "left", children, link}) => {
    const isCenter = titleAlign === 'center';
    return ( 
        <section className="w-full mb-10">
            <div className="`flex items-center mb-6 ${ isCenter ? 'justify-center relative' : 'justify-between'}`"> 
                <h2 className={`text-2xl font-bold text-dark-gray-2 ${isCenter ? 'text-center' : ''}`}>
                    {title}
                </h2>

                {link && <a href={link.href} className="className={`text-lg font-medium text-primary hover:underline ${isCenter ? 'absolute right-0' : ''}`}" >
                {link.text}                
                </a>}

            </div>

            <div className="w-full">
                {children}
            </div>
            
        </section>
     );
}
 
export default Section;