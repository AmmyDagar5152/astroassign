const boxcardArr = [
    {
        id: 1,
        img: "./img/razor.png",
        subtitle: "Razorpay <br> Dashboard",
    }
    ,{
        id: 1,
        img: "./img/dh.jpg",
        subtitle: "Dhwani <br> Revenue",
    }
    ,{
        id: 1,
        img: "./img/nity.png",
        subtitle: "Astrologers",
    }
    ,{
        id: 1,
        img: "./img/cust.png",
        subtitle: "Customers"
    }
    ,{
        id: 1,
        img: "./img/shop.png",
        subtitle: "Dhwani <br> Shop"
    }
    ,{
        id: 1,
        img: "./img/like.png",
        subtitle: "Recommend <br> Products",
    }
    ,{
        id: 1,
        img: "./img/pin.png",
        subtitle: "Notice <br> Board",
    }
    ,{
        id: 1,
        img: "./img/live.png",
        subtitle: "Live<br> Stream",
    }
    ,{
        id: 1,
        img: "./img/grp.png",
        subtitle: "New Astrologer<br> Hiring",
    }
    ,{
        id: 1,
        img: "./img/flag.png",
        subtitle: "Fraud Flags",
    }
    ,{
        id: 1,
        img: "./img/call.png",
        subtitle: "Knowrality<br> Calls",
    }
    ,{
        id: 1,
        img: "./img/star.png",
        subtitle: "Astrologer<br> Reviews",
    }
    ,{
        id: 1,
        img: "./img/if.png",
        subtitle: "Google Buisness<br> Chat",
    }
    ,{
        id: 1,
        img: "./img/nity.png",
        subtitle: "Insta/FB<br> Chat",
    }
    ,{
        id: 1,
        img: "./img/notification.png",
        subtitle: "Push <br> Notification",
    }
    ,{
        id: 1,
        img: "./img/playstore.png",
        subtitle: "Playstore",
    }
    ,{
        id: 1,
        img: "./img/cs.png",
        subtitle: "Support Chat",
    }
    ,{
        id: 1,
        img: "./img/help.png",
        subtitle: "Astroler Chat",
    }
]

const mainfolder = document.querySelector(".mainfolder")

const showbox = boxcardArr.map((project, index) => {
    return ` <div class="box">
    <img src=${project.img} alt="">
    <p>${project.subtitle}</p>
</div>`
})

mainfolder.innerHTML = showbox
console.log(mainfolder);