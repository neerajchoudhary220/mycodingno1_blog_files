$(document).ready(function(){
    const baseUrl = "https://neerajchoudhary220.github.io/mycodingno1_blog_files";
    $('#testBtn').click(function(){
        const url = baseUrl+files.pages.page1;
        console.log(url);
        $("#loadData").load(url);
    });
})