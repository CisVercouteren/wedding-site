import { useState } from "react";

const RsvpSpotifySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: 1,
    attending: 'ja'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const attending = formData.attending == "ja" ? true : false;
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
              Aanwezig: attending,
              Aantal: +formData.amount
            }
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', attending: 'yes', amount:1 });
      
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
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Naam</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label htmlFor="attending" className="block text-gray-700 mb-2">Aanwezig</label>
            <select 
              id="attending" 
              name="attending" 
              value={formData.attending}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="ja">JA 🙌</option>
              <option value="nee">NEE 🚫</option>
            </select>
          </div>
          <div>
          <label htmlFor="amount" className="block text-gray-700 mb-2">Aantal</label>
          <input type="number" step="1" min="0" 
              id="amount" 
              name="amount" 
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"/>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Verstuur 🚀
          </button>
        </form>
      </div>
      <div className="spotify-player flex-1">
        <h2 className="hidden text-2xl font-bold mb-6">Music</h2>
        <div className="aspect-w-1 aspect-h-1">
        <iframe className="border-radius:12px" src="https://open.spotify.com/embed/playlist/0ojXuHD81Ib8ObekuTV199?utm_source=generator" width="100%" height="500px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
}

export default RsvpSpotifySection;
