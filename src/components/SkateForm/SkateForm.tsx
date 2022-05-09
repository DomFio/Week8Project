import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseBearings, 
    chooseWheels,
    chooseTrucks,
    chooseHardware,
    chooseDeck,
    chooseGrip,
    choosePrice } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';


interface SkateFormProps{
    id?:string;
    data?:{};
}

interface SkateState{
    bearings:string;
    wheels:string;
    trucks:string;
    hardware:string;
    deck_brand:string;
    grip_tape:string;
    price:string;
}

export const SkateForm =(props:SkateFormProps) => {
    const dispatch = useDispatch();
    let {skateData, getData} = useGetData();
    const store = useStore()

    // How to select your state as a variable
    const bearings = useSelector<SkateState>(state => state.bearings)
    const wheels = useSelector<SkateState>(state => state.wheels)

    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data.bearings} \nID: ${props.id}`)
            window.location.reload();
            event.target.reset()
        }else {
            dispatch(chooseBearings(data.bearings))
            dispatch(chooseWheels(data.wheels))
            dispatch(chooseTrucks(data.trucks))
            dispatch(chooseHardware(data.hardware))
            dispatch(chooseDeck(data.deck_brand))
            dispatch(chooseGrip(data.grip_tape))
            dispatch(choosePrice(data.price))

            await serverCalls.create(store.getState())
            window.location.reload();
            event.target.reset();
        }
    }

    return(
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="bearings">Bearings</label>
                    <Input {...register('bearings')} name='bearings' placeholder='reds'/>
                </div>
                <div>
                    <label htmlFor="wheels">Wheels</label>
                    <Input {...register('wheels')} name='wheels' placeholder='Spitfire'/>
                </div>
                <div>
                    <label htmlFor="trucks">Trucks</label>
                    <Input {...register('trucks')} name='trucks' placeholder='Thunder'/>
                </div>
                <div>
                    <label htmlFor="hardware">Hardware</label>
                    <Input {...register('hardware')} name='hardware' placeholder='Iron Horse'/>
                </div>
                <div>
                    <label htmlFor="deck_brand">Deck Brand</label>
                    <Input {...register('deck_brand')} name='deck_brand' placeholder='Creature'/>
                </div>
                <div>
                    <label htmlFor="grip_tape">Grip Tape</label>
                    <Input {...register('grip_tape')} name='grip_tape' placeholder='Grizzly'/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name='price' placeholder='180.00'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}