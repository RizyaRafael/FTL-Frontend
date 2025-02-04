'use client'
import Link from "next/link";
import { useEffect, useState } from "react";



export default function Home() {

  const [bookedRoom, setBookedRoom] = useState(["data"])
console.log(bookedRoom)
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/RoomMeetingBooked")
      const data = await res.json()

      setBookedRoom(data)
    }
    getData()
  }, [])
  return (
    <div>
      <div className="bg-red-500 flex justify-between items-center h-16">
        <div className="pl-5 flex justify-start  gap-x-3 ">
          <p>logo</p>
          <p>iMeeting</p>
        </div>
        <div className="pr-5 flex justify-end gap-x-3">
          <p>Bell</p>
          <p>profile pic</p>
          <p>nama</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-10 py-5">
          <div>
            <p className="text-5xl">Ruang Meeting</p>
            <p className="text-xl pt-5">Ruang Meeting</p>
          </div>
          <Link href="book-room" className="bg-blue-700 border rounded-xl px-2 w-1/6 flex justify-center  items-center text-white h-16 text-3xl">
            <button >+ Pesan Ruangan</button>
          </Link>

        </div>
        <table className="border-collapse  border-spacing-2 border border-black w-full border-collapse">
          <thead>
            <tr>
              <th>Unit</th>
              <th>Ruang Meeting</th>
              <th>Kapasitas</th>
              <th>Tanggal Rapat</th>
              <th>Waktu</th>
              <th>Jumlah Peserta</th>
              <th>Jenis Konsumsi</th>
            </tr>
          </thead>
          <tbody>
            {bookedRoom.length > 0 ? (
              bookedRoom.map((room, index) => {
                return <tr key={index} className="text-center">
                  <td>{room.unit}</td>
                  <td>{room.MeetingRoom?.name}</td>
                  <td>{room.MeetingRoom?.capacity}</td>
                  <td>{room.MeetingDate}</td>
                  <td>{room.time}</td>
                  <td>{room.totalParticipant}</td>
                  <td>{room.foodType}</td>
                </tr>
              })
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
