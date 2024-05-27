const Campaign = require("../../../models/campaign.js");

const editCampaign = async (req, res) => {
  const { id } = req.params;
  const {
    campaignName,
    reason,
    location,
    socialMedia,
    contentType,
    responseAi,
  } = req.body;
  await Campaign.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        ...(campaignName && { campaignName }),
        ...(reason && { reason }),
        ...(location && { location }),
        ...(socialMedia && { socialMedia }),
        ...(contentType && { contentType }),
        ...(responseAi && { responseAi }),
      },
    }
  )
    .then((data) => res.status(200).json(data))
    .catch((error) =>
      res.status(400).json({ message: "Your request gives error" })
    );
};

module.exports = editCampaign;
