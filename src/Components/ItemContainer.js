import React from 'react'


function ItemContainer({item}) {
   
    return (

        <>
        {item.map(val=>{
            return <div className="cardItems" key={val.id}>
             <div className="image"><img src={val.img} alt={val.img}/></div>
             <div className="details">
                 <div className="title">{val.title}</div>
                 <div className="price">{val.price}</div>
             </div>
             </div>
        })
        
        
        }

           
                {/* <div className="cardItems">
                <div className="image"><img src={cake1}/></div>
                <div className="details">
                    <div className="title">cake</div>
                    <div className="price">100</div>
                </div>
                </div>
                <div className="cardItems">
                <div className="image"><img src={cake1}/></div>
                <div className="details">
                    <div className="title">cake</div>
                    <div className="price">100</div>
                </div>
                </div>
             */}
        </>
    )
}

export default ItemContainer;
