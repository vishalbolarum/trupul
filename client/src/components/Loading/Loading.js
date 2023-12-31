import './Loading.css'
import ClipLoader from 'react-spinners/MoonLoader'

const Loading = () => {
    return (
        <div className='loading'>
            <ClipLoader
                color='#ffffff'
                size={100}
                speedMultiplier={0.5}
            />
        </div>
    )
}

export default Loading