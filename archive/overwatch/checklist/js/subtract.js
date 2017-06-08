// $(document).ready(() => {
//     $('section').each((i, e) => {
//         let total = 0;
//         $('section:nth-child(' + (i + 2) + ')' + ' .quality .price').each((o, p) => {
//             if ($($(p).parent().find('input[type="checkbox"]')[0]).prop('checked') === false)
//                 total += Number(p.innerText.replace(',', ''));
//         });
//         $('section:nth-child(' + (i + 2) + ') .subtitle.price').text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
//     });
// });
//
// $('input[type="checkbox"]').on('click', (e) => {
//     let price = e.target.parentElement.children[2];
//     let groupPrice = e.target.parentElement.parentElement.parentElement.children[0].children[0];
//     if (e.target.checked)
//         groupPrice.innerText = (Number(groupPrice.innerText.replace(',', '')) - Number(price.innerText.replace(',', ''))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     else
//         groupPrice.innerText = (Number(groupPrice.innerText.replace(',', '')) + Number(price.innerText.replace(',', ''))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// });
