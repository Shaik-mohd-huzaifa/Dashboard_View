import supabase from './supabase'

export const getData = async () => {
    const {data, error} = await supabase.from('Dashboard').select('*');

    if(error){
        console.error(error);
        throw new Error('Error occured in Fetching Data');
    }

    return data
}