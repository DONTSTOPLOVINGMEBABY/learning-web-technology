import { useLoaderData } from "react-router-dom"
import DataView from "./dataView"
import Loader from "../assets/loader"
import AppWrapper from "./appWrapper"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export async function dataLoader ({ params }){
    return fetch('http://localhost:5000/test-loader')
}

export default function TheData () {

    let data = useLoaderData()
    return <DataView data={data} />
}

