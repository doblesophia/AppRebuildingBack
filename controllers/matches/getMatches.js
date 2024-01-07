import express from 'express';
import Match from '../../models/Match.js';


export default async function (req, res) {
    try {
    const matches = await Match.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/readMatches',
                matches
        });
    } catch (error) {
      console.log(error)
    }
  }