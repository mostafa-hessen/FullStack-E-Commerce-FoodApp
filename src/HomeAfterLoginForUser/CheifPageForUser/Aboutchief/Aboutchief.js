
export default function AboutCheif({data}) {
    return (
        <div dir="rtl" className="container justify-content-center rounded-5 mt-5" style={{ backgroundColor: '#dce6d5' }}>
            <div className="row " >
                <div className="col-lg-2 align-self-center mx-auto mt-3 col-sm-12 col-md-12">
                    <h3>عن الشيف</h3>
                </div>
            <div className="offset-lg-1 col-lg-8 p-3 fs-6 col-sm-12 col-md-12 my-2" style={{textAlign:'right'}}>
            <p>{data?.detailscooker}</p>
            </div>
            </div>
        </div>
    )
}
