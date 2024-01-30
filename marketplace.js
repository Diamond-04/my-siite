let data = [
    {
        img: "./media/Marketplace/image (1).png",
        artName: "Magic Mushroom",
        artistImg: "./media/Marketplace/avatar (1).png",
        artistName:"Shroomie",
        prise:"1.63 ETH",
        hb:"0.33 wETH"
    },
    {
        img: "./media/Marketplace/image (2).png",
        artName: "Happy Robot 032",
        artistImg: "./media/Marketplace/avatar (3).png",
        artistName:"BeKind2Robots",
        prise:"1.63 ETH",
        hb:"0.33 wETH"
    },
    {
        img: "./media/Marketplace/image (3).png",
        artName: "Happy Robot 024",
        artistImg: "./media/Marketplace/avatar (3).png",
        artistName:"BeKind2Robots",
        prise:"1.63 ETH",
        hb:"0.33 wETH"
    },
    {
        img: "./media/Marketplace/image (4).png",
        artName: "Designer Bear",
        artistImg: "./media/Marketplace/avatar (4).png",
        artistName:"Mr Fox",
        prise:"1.63 ETH",
        hb:"0.33 wETH"
    },
    {
        img: "./media/Marketplace/image (5).png",
        artName: "Colorful Dog 0356",
        artistImg: "./media/Marketplace/avatar (5).png",
        artistName:"Keepitreal",
        prise:"1.63 ETH",
        hb:"0.33 wETH"
    },
    {
        img: "./media/Marketplace/image (6).png",
        artName: "Dancing Robot 0312",
        artistImg: "./media/Marketplace/avatar (6).png",
        artistName:"Robotica",
        prise:"1.63 ETH",
        hb:"0.33 wETH"
    },
    {
        img: "./media/Marketplace/image (7).png",
        artName: "Cherry Blossom Girl",
        artistImg: "./media/Marketplace/avatar (7).png",
        artistName:"MoonDancer",
        prise:"1.63 ETH",
        hb:"0.33 wETH"
    },
    {
        img: "./media/Marketplace/image (8).png",
        artName: "Space Travel",
        artistImg: "./media/Marketplace/avatar (8).png",
        artistName:"NebulaKid",
        prise:"1.63 ETH",
        hb:"0.33 wETH"
    },
    {
        img: "./media/Marketplace/image (9).png",
        artName: "Sunset Dimension",
        artistImg: "./media/Marketplace/avatar (9).png",
        artistName:"Animakid",
        prise:"1.63 ETH",
        hb:"0.33 wETH"
    },
];

let div = document.getElementById("s2ai");

data.forEach(nft=>{
    
    let div_2 = document.createElement('div');
    
    div_2.className = "sec_2_dis";

    let imgNFT = document.createElement("img")
    imgNFT.src = nft.img
    imgNFT.className = "sec_2_img";

    let div_3 = document.createElement('div');
    div_3.className = "sec_2_dis_text";

    let nftName = document.createElement("a")
    nftName.className = "sec_h4 mar_2";
    nftName.textContent = nft.artName;
    nftName.href = "./nft_page.html";

    let div_4 = document.createElement('div');
    div_4.className = "sec_author mar";

    let div_5 = document.createElement('div');
    div_5.className = "sec_2_prise";

    let artistImg = document.createElement('img');
    artistImg.src = nft.artistImg;
    artistImg.className = "sec_h5";

    let artistName = document.createElement('a');
    artistName.textContent = nft.artistName;
    artistName.href = "./Artist Page.html";

    let div_6 = document.createElement('div');
    let div_7 = document.createElement('div');

    let nameOneAttribute = document.createElement('span');
    nameOneAttribute.textContent = "Prise";
    nameOneAttribute.className = "sec_h6 mar_3";

    let nftPrise = document.createElement('span');
    nftPrise.textContent = nft.prise;

    let nameTwoAttribute = document.createElement('span');
    nameTwoAttribute.textContent = "Highest Bid";
    nameTwoAttribute.className = "sec_h6 mar_3";

    let hb = document.createElement('span');
    hb.textContent = nft.hb;

    div_7.append(nameTwoAttribute,hb);
    div_6.append(nameOneAttribute,nftPrise);
    div_5.append(div_6,div_7);
    div_4.append(artistImg,artistName);
    div_3.append(nftName,div_4,div_5);
    div_2.append(imgNFT, div_3);
    div.append(div_2);

})