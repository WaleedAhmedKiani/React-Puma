import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"


const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl font-bold text-center">Our
        <span className="text-Green-dark"> Customer </span>
        Feedback
      </h3>
      <p className="info-text m-auto mt-4 text-center max-w-lg">Listening to customer feedback fosters stronger relationships and enhances overall satisfaction.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>(
          <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName}
          feedback={review.feedback} rating={review.rating} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReview