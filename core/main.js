$(() => {
    $(document).ready(() => {
        $('#xlsx_file').change(event => {

            if(!!event.target.files.length){
                console.log(event.target.files[0]);

                let reader = new FileReader();
                reader.onload = e => {

                    console.log(e);

                    let data = e.target.result;

                    var u = new JSUnzip(data);

                    var k = u.readEntries();
                    console.log(u, k);
                }

                reader.readAsBinaryString(event.target.files[0]);
            }
        });
    });
});
