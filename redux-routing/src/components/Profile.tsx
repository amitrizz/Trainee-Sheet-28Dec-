
export default function Profile() {
  return (
    <>

      <main className="profile-page">
        <section className="profile-card">
          <div className="profile-avatar">
            <img
              src="https://via.placeholder.com/120"
              alt="User Avatar"
            />
          </div>

          <div className="profile-info">
            <h2>Amit Kumar</h2>
            <p className="profile-email">amit@example.com</p>

            <div className="profile-stats">
              <div>
                <strong>12</strong>
                <span>Orders</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Wishlist</span>
              </div>
              <div>
                <strong>₹8,450</strong>
                <span>Spent</span>
              </div>
            </div>

            <button className="edit-profile-btn">
              Edit Profile
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
