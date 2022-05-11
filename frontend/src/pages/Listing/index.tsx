import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

function Listing() {

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    {/* 
                    mb = margin bottom 
                    col-*-* = refers to the bootstrap gridsystem, multiples of 12 eg.: col-xl-4 defines
                    defines that each component will ocuppy on max 3, therefore 3 per row
                    */}
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;