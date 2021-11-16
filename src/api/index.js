import axios from 'axios';

const getPlacesData = async () => {
    const { places, setPlaces } = useState([])

    try {
        const response = await axios.get('/api/places', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                const place = response.data;
                this.setState({ place });
            })
    } catch (error) {
        console.log(error)
    }
};