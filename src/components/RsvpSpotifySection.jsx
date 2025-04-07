import { useState } from "react";

const RsvpSpotifySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: 1,
    attending: 'ja-alles',
    comments: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://api.airtable.com/v0/appX79QAYY9dJAErf/tblQNdPYv6CEwsimP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer pat6F098ObErClBOF.539346b56e85c6e09dd151feda0071203f4ae7718206e54679f53adbe1f1a146`,
        },
        body: JSON.stringify({
          records: [{
            fields: {
              Naam: formData.name,
              Email: formData.email,
              Aanwezig: formData.attending,
              Aantal: +formData.amount,
              Comment: formData.comments
            }
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', attending: 'yes', amount: 1, comments: '' });
      
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  

  return (
    <div id='RSVP' className="rsvp-spotify-section flex flex-col md:flex-row gap-8 p-8 bg-cream">
      <div className="rsvp-form flex-1 bg-white/25 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gold">RSVP</h2>
        {success ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Bedankt!</strong>
            <span className="block sm:inline"> Je RSVP is succesvol verzonden.</span>
          </div>
        ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2 after:content-['*']">Naam</label>
            <input 
              type="text" 
              required="true"
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2 after:content-['*']">Email</label>
            <input 
              type="email" 
              id="email" 
              required="true"
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label htmlFor="attending" className="block text-gray-700 mb-2 after:content-['*']">Aanwezig</label>
            <select 
              id="attending" 
              name="attending" 
              value={formData.attending}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="ja-alles">JA, de hele dag 🙌</option>
              <option value="ja-ceremonie">JA, vanaf ceremonie 🙌</option>
              <option value="nee">NEE 🚫</option>
            </select>
          </div>
          <div>
          <label htmlFor="amount" className="block text-gray-700 mb-2 after:content-['*']">Aantal</label>
          <input type="number" step="1" min="0" 
              id="amount" 
              name="amount" 
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"/>
          </div>
          <div>
            <label htmlFor="comments" className="block text-gray-700 mb-2">Allergieën of mededelingen</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Voedselallergieën of andere opmerkingen..."
            ></textarea>
          </div>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full ${loading ? 'bg-gold/75' : 'bg-gold/85 hover:bg-gold'} text-white py-2 px-4 rounded-md transition duration-200 flex justify-center items-center`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Bezig...
              </>
            ) : (
              'Verstuur 🚀'
            )}
          </button>
        </form>
        )}
      </div>
      <div className="spotify-player flex-1">
        <h2 className="hidden text-2xl font-bold mb-6">Music</h2>
        <div className="aspect-w-1 aspect-h-1">
        <iframe className="border-radius:12px" src="https://open.spotify.com/embed/playlist/0ojXuHD81Ib8ObekuTV199?utm_source=generator" width="100%" height="700px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
}

export default RsvpSpotifySection;
