function Card(props, idx){
    return(
        <div key={idx} className="relative bg-cover w-40 h-52 p-4 rounded-md bg-[url('https://worksheets.clipart-library.com/images2/printable-note-designs/printable-note-designs-10.jpg')]">
              <h3 className='m-3 leading-tight font-medium text-black'>{props.title}</h3> 
              <p className='font-medium text-sm text-black'>{props.detail}</p>
        </div>
    )

}
export default Card;