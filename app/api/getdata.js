import supabase from './supabase'
import { useContext } from 'react';
import {DashboardVisibilityContext} from '../Context/dashboardDataProvider'

export const getData = async () => {
    const {data, error} = await supabase.from('Dashboard').select('*');

    if(error){
        throw new Error('Error occured in Fetching Data');
    }

    return data
}