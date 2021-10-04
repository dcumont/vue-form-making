export default{
    customToolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ["bold", "italic", "underline", "strike"], // toggled buttons
        [ { align: "" },
            { align: "center" },
            { align: "right" },
            { align: "justify" } ],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ indent: "-1" }, { indent: "+1" }], 
        [{ color: [] }, { background: [] }],
        ["clean"]
    ]
}