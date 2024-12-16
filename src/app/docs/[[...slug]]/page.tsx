

{/*const Docs = ({params, }: {params: {slug: string[]}}) => {
    const slug = params?.slug || [];
    let title;
    if(params.slug.length ==1){
      title = `Features ${slug[0]}`
    }
    if(params.slug.length ==2){
        title = `Features ${slug[0]} Concepts ${slug[1]}`
      }
      if(params.slug.length ==3){
        title = `Features ${slug[0]} Concepts ${slug[1]}  Examples ${slug[2]}`
      }
      console.log(params.slug)
    return (
      <div>
        <h1>Navbar</h1>
        <p>{title}</p>
        <h2></h2>
   
      </div>
    )
  }
  
  export default Docs
  */}
  export default  function Docs({params}: {params: {slug: string[]}}){
 
    const slug = params?.slug || [];
    let title;
    if(params.slug?.length ==1){
      title = `Features ${slug[0]}`
    }
    if(params.slug?.length ==2){
        title = `Features ${slug[0]} Concepts ${slug[1]}`
      }
      if(params.slug?.length ==3){
        title = `Features ${slug[0]} Concepts ${slug[1]}  Examples ${slug[2]}`
      }
      if(!params.slug){
          title = `Document`;
      }
      console.log(params.slug)
    return (
      <div>
        <h1>Navbar</h1>
        <p>{title}</p>
        <h2></h2>
   
      </div>
    )
  }
