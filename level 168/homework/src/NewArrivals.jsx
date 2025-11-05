import { useState, useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NewArrivalsCard from './NewArrivalsCard'
function NewArrivals() {
    const [info, setInfo] = useState([])
    const [randElement, setRandElement] = useState([])
    async function getData() {
        let response = await fetch("/data2.json")
        let data = await response.json()
        setInfo(data)
    }

    useEffect(()=>{
        getData()
    }, [])
    useEffect(()=>{
        if (info){
            console.log(info)
        }
    }, [info])
    useEffect(() => {
        if (info.length === 0) {
            return
        }

        const selected = []

        const usedIndexes = new Set()
        while (selected.length < 4) {
            const random = Math.floor(Math.random() * info.length);
            if (!usedIndexes.has(random)) {
                usedIndexes.add(random)
                selected.push(info[random])
            }
        }
        setRandElement(selected)
    }, [info])

    return (
        <>
        <div className='mt-[60px]'>
            <h1 className='text-[48px] text-black font-[900] text-center'>NEW ARRIVALS</h1>
            <div className='flex justify-center gap-[20px] mt-[40px] flex-wrap'>
                {/* <NewArrivalsCard imgSrc="/images/blackshirt.png" name="T-Shirt with Tape Details" rating={4.5} price={120}/>
                <NewArrivalsCard imgSrc="/images/bluejeans.png" name="Skinny Fit Jeans" rating={3.5} price={240} isDiscount prevPrice={260} discount={20}/>
                <NewArrivalsCard imgSrc="/images/redshirt.png" name="Checkered Shirt" rating={4.5} price={180}/>
                <NewArrivalsCard imgSrc="/images/orangeshirt.png" name="Sleeve Striped T-shirt" rating={4.5} price={130} isDiscount prevPrice={160} discount={30}/> */}
                {
                    randElement.map((item, index) => {
                        return <NewArrivalsCard imgSrc={item.imgList[0]} name={item.title} rating={item.rate} price={item.price} isDiscount={item.discount ? true : false} prevPrice={item.discount} key={index}/> 
                    }) 
                }
            </div>
            <div className='flex justify-center gap-[20px] mt-[40px] flex-col items-center gap-[70px]'>
                <button className='w-[258px] h-[52px] rounded-[62px] border border-[#0000001A] font-[500]'>View All</button>
                <img src="/images/line.png" alt="" />
            </div>
        </div>
        </>
    )
}

export default NewArrivals