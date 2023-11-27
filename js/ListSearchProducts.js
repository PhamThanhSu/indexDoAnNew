//Lấy giá trị mảng sản phẩm từ LocalStorage
const storedJsonString = localStorage.getItem('ArrayListProducts');
// Chuyển đổi chuỗi JSON thành mảng
const storedArray = JSON.parse(storedJsonString);

var main = document.getElementById('container-none-filter')
var divfiltersearch = document.getElementById('container-filter-search');

function handleFilterFileresult() {
    main.style.display = 'none';
    divfiltersearch.style.display = 'block';
    ListSellingProductss(storedArray);
    return false;
}
function ListSellingProductss(storedArray) {
    let s = '';

    for (let i = 0; i < storedArray.length; i++) {
        const product = storedArray[i];
        var anh = product.img;
        var doi = product.doi;
        var name = product.name;
        var cpu = product.cpu;
        var ram = product.ram;
        var ssd = product.ssd;
        var vga = product.vga;
        var pricecompare = product.pricecompare;

        s += `<div class="itemproduct" id="itemproduct_${i}">
                <div>
                    <a href="#">
                        <img src="${anh}" class="anh" data-doi="${doi}" style="width: 100%; height: 210px;"/>
                    </a>
                </div>
                <div class="content">
                    <div class="title" title="${name}">${name}</div>
                    <div id="cpu"><img src="./sua/css/image/cpu.png" width="9%">
                        <span>&nbsp; ${cpu}</span>
                    </div>
                    <div id="ram"><img src="./css/image/ram.png" width="9%">
                        <span>&nbsp; ${ram}</span>
                    </div>                    
                    <div id="ssd"><img src="./css/image/ssd.png" width="7%">
                        <span>&nbsp; ${ssd}</span>
                    </div>                    
                    <div id="vga"><img src="./css/image/vga-card.png" width="8%">
                        <span>&nbsp; ${vga}</span>
                    </div>                    
                    <div id="price">
                        <span id="price-item" id="price">${pricecompare}₫</span>
                    </div>                    
                </div>
            </div>`;

       
    }
   
    // Appending the generated HTML to the container
    document.getElementById('item-selling-products').innerHTML = s;
    var elements = document.querySelectorAll('.anh');

    elements.forEach(function (element) {
      handleImageHover(element);
    });

    
    for (let i = 0; i < storedArray.length; i++) {
        const listItem = document.getElementById(`itemproduct_${i}`);
        listItem.addEventListener('click', function() {
             var selectedIndex = i;
            localStorage.setItem('selectedProductIndex', selectedIndex);
            window.location.href = 'productInfomation.html?id=' + storedArray[i].id;
        });
    }
}