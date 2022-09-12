import {default as axios} from 'axios'
const api_add = process.env.REACT_APP_API_ADDRESS

/**
  * Delete a stream
  * @method DELETE
  * @param {string} stream_id the stream's ID
  * 
  */
const delete_stream = async (stream_id) => {
    let url = api_add + "/streams/" + stream_id
    try{
        return await axios.delete(url);
    } catch (e) {
        console.log('in Stream.delete_stream');
        console.log(e);
    }
}

/**
  * Get all streams
  * @method GET
  * 
  */
 const get_streams = async () => {
    let url = api_add + "/streams"
    try{
        return await axios.get(url);
    } catch (e) {
        console.log('in Stream.get_stream');
        console.log(e);
    }
}

const create_stream = async (stream) => {
    let url = api_add + "/streams"
    try{
        return await axios.post(url, stream);
    } catch (e) {
        console.log('in Stream.create_stream');
        console.log(e);
    }
}

const start_stream = async (stream_id) => {
    let url = api_add + "/streams/start/" + stream_id
    try{
        return await axios.put(url);
    } catch (e) {
        console.log('in Stream.create_stream');
        console.log(e);
    }
}

const stop_stream = async (stream_id) => {
    let url = api_add + "/streams/stop/" + stream_id
    try{
        return await axios.put(url);
    } catch (e) {
        console.log('in Stream.create_stream');
        console.log(e);
    }
}

export {
    delete_stream,
    get_streams,
    create_stream,
    start_stream,
    stop_stream
}