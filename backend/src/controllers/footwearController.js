import Footwear from "../models/footwearModels.js";

export async function getAllFootwear(_, res) {
    try {
        const footwearItems = await Footwear.find().sort({ createdAt: -1 });
        res.status(200).json(footwearItems);
    } catch (error) {
        console.error("Error in getAllFootwear controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getFootwearById(req, res) {
    try {
        const footwear = await Footwear.findById(req.params.id);
        if (!footwear) {
            return res.status(404).json({ message: "Footwear not found" });
        }
        res.status(200).json(footwear);
    } catch (error) {
        console.error("Error in getFootwearById controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
export async function createFootwear(req, res) {
    try {
        const { type, category, price, colour, size } = req.body;
        if (!type || !category || !price || !colour || !size) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const footwear = new Footwear({ type, category, price, colour, size });
        const savedFootwear = await footwear.save();
        res.status(201).json(savedFootwear);
    } catch (error) {
        console.error("Error in createFootwear controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function updateFootwear(req, res) {
    try {
        const { type, category, price, colour, size } = req.body;
        const updatedFootwear = await Footwear.findByIdAndUpdate(
            req.params.id,
            { type, category, price, colour, size },
            { new: true }
        );
        if (!updatedFootwear) {
            return res.status(404).json({ message: "Footwear not found" });
        }
        res.status(200).json(updatedFootwear);
    } catch (error) {
        console.error("Error in updateFootwear controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function deleteFootwear(req, res) {
    try {
        const deletedFootwear = await Footwear.findByIdAndDelete(req.params.id);
        if (!deletedFootwear) {
            return res.status(404).json({ message: "Footwear not found" });
        }
        res.status(200).json({ message: "Footwear deleted successfully" });
    } catch (error) {
        console.error("Error in deleteFootwear controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getFootwearStats(req, res) {
    try {
        const { filterBy, value } = req.params;

        let matchCondition = {};

        if (filterBy === "type") {
            matchCondition.type = value;
        } else if (filterBy === "category") {
            matchCondition.category = value;
        } else {
            return res.status(400).json({ message: "Invalid filter. Use 'type' or 'category'." });
        }

        const items = await Footwear.find(matchCondition);

        if (items.length === 0) {
            return res.status(404).json({ message: "No footwear found" });
        }

        const filter = await Footwear.aggregate([
            { $match: matchCondition },
            { 
                $group: { 
                    _id: null, 
                    count: { $sum: 1 }, 
                    averagePrice: { $avg: "$price" } 
                } 
            }
        ]);

        res.status(200).json({
            filterBy,
            value,
            count: filter[0].count,
            averagePrice: filter[0].averagePrice,
            items
        });
    } catch (error) {
        console.error("Error in getFootwearStats:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}