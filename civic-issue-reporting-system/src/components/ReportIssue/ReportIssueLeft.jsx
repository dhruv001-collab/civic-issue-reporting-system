import React,{useEffect} from 'react'
import { useRef } from 'react'

const ReportIssueleft = () => {
  const fileInputRef = useRef(null)
  const [image, setImage] = React.useState(null)

  const ImageHandler = (e) => {
    setImage(e.target.files[0])
  }

   // cleanup object URL
  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  const handleDeleteImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input value
    }
  }


  return (
    <div className='min-w-full max-w-md bg-white p-6 flex flex-col gap-2  rounded-2xl shadow-xl'>
      <h1 className='font-bold text-lg'>Report Issue</h1>

      <div>
        <h2 className='font-medium'>Issue Title <span className='text-red-400 text-xl'>*</span></h2>
        <input className='w-160 border bg-gray hover:bg-white border-black rounded-md h-8 pl-2 text-[14px]' type="text" />
      </div>

      <div>
        <h2 className='font-medium'>Category <span className='text-red-400 text-xl'>*</span></h2>
        
        <input className='w-160 border bg-gray hover:bg-white border-black rounded-md h-8 pl-2 text-[14px]' type="text" placeholder='Select a category' />
      </div>

      <div>
        <h2 className='font-medium'>Location <span className='text-red-400 text-xl'>*</span></h2>
        <input className='w-160 border bg-gray hover:bg-white border-black rounded-md h-8 pl-2 text-[14px]' type="text" placeholder='Street address or nearby landmark' />
      </div>

      <div>
        <h2 className='font-medium'>Description <span className='text-red-400 text-xl'>*</span></h2>
        <input className='w-160 border bg-gray hover:bg-white border-black rounded-md h-8 pl-2 text-[14px]' type="text" placeholder='Provide a detailed description' />
      </div>

      <div>
        <h2>Photo/Video <span className='text-red-400 text-xl'>*</span></h2>
        <label htmlFor="file-input">
          {image ?
             <div className="relative w-30 h-30">
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              className="w-full h-full object-cover rounded-xl border"
            />
            {/* delete button */}
            <button
              type="button"
              onClick={handleDeleteImage}
              className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
            :
            <div
              className="w-160 h-30 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center rounded-xl cursor-pointer hover:bg-gray-100 transition">
              <p className="text-gray-500">Click or Drag & Drop</p>
              <p className="text-sm text-gray-400">Upload your file here</p>
            </div>
          }

        </label>
        <input ref={fileInputRef} onChange={ImageHandler} suppressHydrationWarning type="file" name='image' id='file-input' hidden />

      </div>

      <button className='px-6 py-2 mt-5 w-full bg-teal-400 text-white rounded-full hover:bg-black transition-all'>Post Issue</button>
    </div >
  )
}

export default ReportIssueleft
