//  Searching --->


// $(document).ready(function () {

//     $("#serch_logo").click(function () {
//         $(".togglesearch").slideToggle();
//         $("input[type='text']").focus();
//     });

// });

$(document).ready(function () {
    $('#serch_logo').click(function (e) {
        $('.togglesearch').stop(true).slideToggle();
    });
    $(document).click(function (e) {
        if (!$(e.target).closest('#serch_logo, .togglesearch').length) {
            $('.togglesearch').stop(true).slideUp();
        }
    });
});
//  Toggel finish..


var actual_Data ;
document.querySelector("#query").addEventListener("input", fetchingData)
async function fetchingData() {
    try {
        let query = document.querySelector("#query").value
        let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=529a9081&s=${query}`)

        data = await res.json()

        console.log('data: ', data);
        actual_Data = data.Search
        // console.log('actual_Data: ', actual_Data);
        visible(actual_Data)
    }
    catch (err) {
        console.log('err: ', err);

    }
}

fetchingData()



function constructor(title, poster, year){
    this.title = title
    this.poster = poster
    this.year = year

}
let arx = JSON.parse(localStorage.getItem("detMovie")) || []


function visible(data) {

    if(data===undefined){
        return false
    }

    document.querySelector("#container").innerHTML = ""

    data.forEach((el, ind) => {
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.Poster

        let h2 = document.createElement("h2")
        h2.innerText = el.Title

        let h4 = document.createElement("h4")
        h4.innerText = `Released year: \xa0 ${el.Year}`






        let Sdiv = document.createElement("div")

        let span1 = document.createElement("span")
        let a = document.createElement("a")
        a.href = "./new.html"
        a.target = "_blank"
        a.addEventListener("click",()=>{
            // console.log("ama")
            let obj = new constructor(el.Title,el.Poster,el.Year)
            arx.push(obj)

            localStorage.setItem("detMovie", JSON.stringify(arx))
        })
        let btn = document.createElement("button")
        btn.innerText="Show Details"
        btn.id = "btnfornewpage"
        
        
        a.append(btn)
        span1.append(a)

        let span2 = document.createElement("span")
        let ratings = Math.floor(Math.random() * 9) + 1
        span2.innerText = ratings
        let rate = span2.innerText
       
        if (rate >= 8) {
            span2.style.color = "#06D85F"
        } else if (rate >= 5) {
            span2.style.color = "yellow"
        } else {
            span2.style.color = "red"
        }
        let span3 = document.createElement("span")
        span3.innerText = " / 10"





        span2.append(span3)
        Sdiv.append(span1, span2)
        div.append(img, h2, h4, Sdiv)
        container.append(div)
    })
}

// Searching Finish









//! Craosel 

let images = ["https://i.ytimg.com/vi/YrFd7maxLDA/maxresdefault.jpg", "https://i.ytimg.com/vi/V16Ohze_nqY/maxresdefault.jpg", "https://assets.thehansindia.com/h-upload/2021/01/26/1026917-kgf-2.webp", "https://blog.instube.com/wp-content/uploads/2018/11/Ranbir-Kapoor-Sanju-Movie-download.jpg", "https://i.ytimg.com/vi/WhjptGq4zb0/maxresdefault.jpg", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7414/957414-h"]
localStorage.setItem("images", JSON.stringify(images))

let x;
function StartCarosel() {
    let images = JSON.parse(localStorage.getItem("images"))
    let carosel = document.querySelector("#carosel")

    carosel.innerHTML = null



    let i = 0
    let img = document.createElement("img")

    img.src = images[0]
    carosel.append(img)
    i++

    x = setInterval(() => {
        if (i === 6) {
            i = 0
        }

        img.src = images[i]
        carosel.append(img)
        // console.log(i)
        i++
    }, 2500)
}


StartCarosel()












localStorage.clear();


function fun(a, b, c, d, e) {
    this.poster = a
    this.name = b
    this.releaseDate = c
    this.type = d
    this.IMDbRating = e
}

let m1 = new fun("https://flxt.tmsimg.com/assets/p20775014_p_v8_aa.jpg", "Shiddat", "1 October 2021", "Love", 9.2)
let m2 = new fun("https://m.media-amazon.com/images/M/MV5BOGE0Nzg5ZjYtMDBlNi00NjQ4LTk5ZmQtMDY5NjRhYzgyNGU0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg", "Love Games", "8 April 2016", "Thriller", 4.2)
let m3 = new fun("https://m.media-amazon.com/images/M/MV5BOGRhZmVhMzQtYWRhZC00MDYwLTlmMTMtZGNhYzgzOTZlZmMyXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg", "Gehraiyaan", "11 February 2022", "Romance", 5.9)
let m4 = new fun("https://m.media-amazon.com/images/M/MV5BMTU4NDk0MTI5MF5BMl5BanBnXkFtZTgwNzM4NTkzMDI@._V1_.jpg", "Befikre", "9 December 2016", "Romance", 8.7)
let m5 = new fun("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0oOG1QBwIczzDEZjZ6OmFIvthTiGGWI6PajZ_3s-SsBjavWVc", "Ae Dil Hai Mushkil", "28 October 2016", "Romance", 5.8)
let m6 = new fun("https://m.media-amazon.com/images/M/MV5BMDkxM2FmZTYtN2JlNi00YTNkLWIxMGYtYWE5MmFmOTY1NWE0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", "Dhadak", "20 July 2018", "Love", 4.5)
let m7 = new fun("https://m.media-amazon.com/images/M/MV5BNTlkOTgzOTktMzNkMC00YjQ2LTlkM2UtZGZhZTk1N2MwNTE0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg", "Love Aaj Kal", "14 February 2020", "Love", 6.4)
let m8 = new fun("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDq0RNEZ1od03cG7XEA0-LVXBPwZKMWrzHBgSbfE0HQ0rFarR", "Luka Chuppi", "1 March 2019", "Drama", 7.2)
let m9 = new fun("https://www.filmibeat.com/img/popcorn/movie_posters/hacked-20200121154414-18971.jpg", "Hacked", "7 February 2020", "Thriller", 4.4)
let m10 = new fun("https://m.media-amazon.com/images/M/MV5BNTlmNDMzOWQtYzg4Ny00OWQ0LWFhN2MtNmQ2MDczZGZhNTU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", "War", "2 October 2019", "Action", 6.1)
let m11 = new fun("https://m.media-amazon.com/images/M/MV5BNDExMTBlZTYtZWMzYi00NmEwLWEzZGYtOTA1MDhmNTc0ODZkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", "Hera Pheri", "7 February 2010", "Comedy", 8.1)
let m12 = new fun("https://miro.medium.com/max/731/1*6c3Gk-Q797iZ__c70DFiDQ.jpeg", "Gully Boy", "14 February 2019", "Drama", 4.9)
let m13 = new fun("https://m.media-amazon.com/images/M/MV5BY2M5MjBhMjctNzdmMy00ZTRjLWIxNzgtZTk5NTFlNWFlNDhmXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_.jpg", "K.G.F 2", "11 April 2022", "Action", 8.9)
let m14 = new fun("https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Dhamaal.jpg", "Dhammal", "13 June 2011", "Comedy", 5.4)
let m15 = new fun("https://m.media-amazon.com/images/I/71sjJbn45bL._SY741_.jpg", "Thank-You", "1 March 2013", "Drama", 8.0)
let m16 = new fun("https://www.quirkybyte.com/wp-content/uploads/2022/01/pushpa.jpg", "Puhspa", "17 December 2021", "Action", 9.1)
let m17 = new fun("https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/7309/177309-v", "Badhaai Ho", "8 April 2016", "Drama", 6.3)
let m18 = new fun("https://m.media-amazon.com/images/M/MV5BMTZjZjZlZWEtYjY0Mi00MGIxLThjZDEtOGI1ZGQwMTdlOGZjXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg", "Sanam Teri Kasam", "14 February 2015", "Love", 9.4)
let m19 = new fun("https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/01/02/Uri--The-Surgical-Strike-movie-release-date-poster-.png?fit=803%2C803&quality=80&zoom=1&ssl=1", "URI", "11 Janauary 2019", "Action", 7.3)
let m20 = new fun("https://i.pinimg.com/550x/1f/b5/29/1fb529ff9ab8a4115a17782bcd2972a2.jpg", "Drishyam", "16 October 2016", "Thriller", 8.8)
let m28 = new fun("https://i.scdn.co/image/ab67616d0000b27348ebfb6ce95843384d0508de", "Phir Hera Pheri", "7 March 2013", "Comedy", 8.6)
let m21 = new fun("https://a10.gaanacdn.com/gn_img/albums/z8k3yd1Krx/8k3y9BE53r/size_l.jpg", "Sanam Re", "12 Janauary 2014", "Romance", 3.9)
let m22 = new fun("https://m.media-amazon.com/images/M/MV5BM2E0NWJlNzYtZjFlZS00NDU4LWI0OTAtYTZlYjc2MmQ2MjdmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", "Dhoom", "7 March 2017", "Action", 4.9)
let m23 = new fun("https://www.filmcompanion.in/wp-content/uploads/2018/02/Film_Companion_Sonu-Ke-Titu-Ki-Sweety_Rahul_Movie_Review_lead_1.jpg", "Sonu Ke Titu Ki Sweety", "9 February 2017", "Comedy", 4.9)
let m24 = new fun("https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_.jpg", "Yeh Jawani Hai Deewani", "18 July 2013", "Love", 8.8)
let m25 = new fun("http://2.bp.blogspot.com/-JgcN_NPZIVE/UnePb7BGHtI/AAAAAAAAAgU/_4LXSsS77zg/s1600/Golmaal-+Fun+Unlimited+(2006)+%E2%80%93+Hindi+Movie+Watch+Online.jpg", "Golmaal", "7 August 2012", "Comedy", 3.4)
let m26 = new fun("https://m.media-amazon.com/images/M/MV5BNDljNWM1MzctM2E5NC00YjFkLWI2MDUtNzJkNGIyMGZmN2MwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SY1000_CR0,0,700,1000_AL_.jpg", "Raam-Leela", "15 November 2013", "Love", 7.9)
let m27 = new fun("https://images-na.ssl-images-amazon.com/images/I/81PX3Q7sd1L._RI_.jpg", "Pyaar Ka Punchnama 2", "16 October 2014", "Comedy", 5.2)
let m29 = new fun("https://m.media-amazon.com/images/M/MV5BNmI4NTU3NTUtZDM3YS00NjJkLTk0MzItZTViNjEwOTg3MzRjXkEyXkFqcGdeQXVyNTY3Mzg5Nzg@._V1_.jpg", "Fever", "9 October 2015", "Thriller", 8.2)
let m30 = new fun("https://m.media-amazon.com/images/M/MV5BNWYyMzg3N2EtNTQ5MC00MWZlLWI3YWEtMmU2ZWNhZWZiNGIzXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg", "Haseen Dilruba", "13 Janauary 2022", "Thriller", 5.3)
let m31 = new fun("https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/wajah-tum-ho-et00047671-12-10-2016-07-10-13.jpg", "Wajah Tum Ho", "11 March 2017", "Romance", 8.3)
let m32 = new fun("https://images.indulgexpress.com/uploads/user/imagelibrary/2021/2/25/original/Aliab.png", "GanguBai Kathiawadi", "12 Janauary 2022", "Drama", 8.3)
let m33 = new fun("https://upload.wikimedia.org/wikipedia/en/9/90/Race_%282008_film%29_poster.jpg", "Race", "11 June 2012", "Thriller", 7.6)
let m34 = new fun("https://m.media-amazon.com/images/M/MV5BMjI4ODUwNTQ5MV5BMl5BanBnXkFtZTgwODg3MTQzMTI@._V1_.jpg", "Badrinath Ki Dulhaniya", "22 Janauary 2018", "Drama", 4.3)
let m35 = new fun("https://upload.wikimedia.org/wikipedia/en/d/da/BABY_poster_2015.jpg", "Baby", "15 August 2012", "Action", 9.5)
let m36 = new fun("https://m.media-amazon.com/images/M/MV5BOTViYTU0NzItYjI3MC00MDZmLThkMzItZjcyYjY2OWYwZDljXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_FMjpg_UX1000_.jpg", "Shaandaar", "9 December 2018", "Romance", 4.9)


let moviesArr = JSON.parse(localStorage.getItem("movies")) || []

// !for not adding the same data again
// if (moviesArr.length > 0) {
//     moviesArr.forEach(element => {
//         if (element.name != m1.name) {
//             moviesArr.push(m1)
//             localStorage.setItem("movies", JSON.stringify(moviesArr))
//         }
//     });

// } else {
//     moviesArr.push(m1)
//     localStorage.setItem("movies", JSON.stringify(moviesArr))
// }
// ! Finish

moviesArr.push(m1 , m8 , m3, m4, m5, m6, m7, m2, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21,m22, m23, m24, m25, m26, m27, m28, m29, m30, m31 , m32, m33, m34, m35, m36)
localStorage.setItem("movies", JSON.stringify(moviesArr))










let container = document.querySelector("#container")

let movieData = JSON.parse(localStorage.getItem("movies"))

function visibleMovies(movieData) {



    document.querySelector("#container").innerHTML = ""

    movieData.forEach((el, ind) => {
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.poster

        let h2 = document.createElement("h2")
        h2.innerText = el.name

        let h4 = document.createElement("h4")
        h4.innerText = "Released Date:\xa0 " + el.releaseDate






        let Sdiv = document.createElement("div")

        let span1 = document.createElement("span")
        span1.innerText = el.type

        let span2 = document.createElement("span")
        span2.innerText = el.IMDbRating
        let rate = span2.innerText
        // console.log('rate: ', rate);
        if (rate >= 8) {
            span2.style.color = "#06D85F"
        } else if (rate >= 5) {
            span2.style.color = "yellow"
        } else {
            span2.style.color = "red"
        }
        let span3 = document.createElement("span")
        span3.innerText = " / 10"





        span2.append(span3)
        Sdiv.append(span1, span2)
        div.append(img, h2, h4, Sdiv)
        container.append(div)
    })
}





// ! Loader code
let getmedataPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

        let data = movieData

        if (data != null) {
            resolve(data)
        }
        else {
            reject(`Err: Server Could not get you data /:`)
        }

    }, 3000)

})

getmedataPromise.then((res) => {
    // res --> succesfull value
    visibleMovies(movieData)
})
    .catch((err) => {
        console.log('err: ', err);

    })
// console.log('getmedataPromise: ', getmedataPromise);












// ! Sorting ---->

function lh() {
    document.querySelector("#sort-lh").addEventListener("click", () => {
        let valueOflh = document.querySelector("#sort-lh").value
        // console.log(valueOflh)
        if (valueOflh == "lh") {
            movieData.sort((a, b) => {
                if (a.IMDbRating > b.IMDbRating) return 1
                if (a.IMDbRating < b.IMDbRating) return -1
                return 0
            })

            visibleMovies(movieData)
            

        }
    })
}
lh()




function hl() {
    document.querySelector("#sort-hl").addEventListener("click", () => {
        let valueOflh = document.querySelector("#sort-hl").value
        // console.log(valueOfhl)
        if (valueOflh == "hl") {
            movieData.sort((a, b) => {
                if (a.IMDbRating > b.IMDbRating) return -1
                if (a.IMDbRating < b.IMDbRating) return 1
                return 0
            })

            visibleMovies(movieData)


        }
    })
}
hl()











//! Filtering ----->

document.querySelector("#Romance").addEventListener("click", () => {
    let valueOfRomance = document.querySelector("#Romance").value
    // console.log(valueOfRomance) 

    let filteredData = movieData.filter((el) => {
        return el.type == valueOfRomance
    })
    visibleMovies(filteredData)
})


document.querySelector("#Love").addEventListener("click", () => {
    let valueOfLove = document.querySelector("#Love").value
    // console.log(valueOfLove) 

    let filteredData = movieData.filter((el) => {
        return el.type == valueOfLove
    })
    visibleMovies(filteredData)
})


document.querySelector("#Thriller").addEventListener("click", () => {
    let valueOfThriller = document.querySelector("#Thriller").value
    // console.log(valueOfThriller) 

    let filteredData = movieData.filter((el) => {
        return el.type == valueOfThriller
    })
    visibleMovies(filteredData)
})


document.querySelector("#Action").addEventListener("click", () => {
    let valueOfAction = document.querySelector("#Action").value
    // console.log(valueOfAction) 

    let filteredData = movieData.filter((el) => {
        return el.type == valueOfAction
    })
    visibleMovies(filteredData)
})


document.querySelector("#Comedy").addEventListener("click", () => {
    let valueOfComedy = document.querySelector("#Comedy").value
    // console.log(valueOfComedy) 

    let filteredData = movieData.filter((el) => {
        return el.type == valueOfComedy
    })
    visibleMovies(filteredData)
})


document.querySelector("#Drama").addEventListener("click", () => {
    let valueOfDrama = document.querySelector("#Drama").value
    // console.log(valueOfDrama) 

    let filteredData = movieData.filter((el) => {
        return el.type == valueOfDrama
    })
    visibleMovies(filteredData)
})



