'use client'
import React, { useEffect, useState } from 'react'
import Dashboard_API from './Dashboard_API'


export default function User() {
  const { get_user } = Dashboard_API()
  const [clan_join_request, setClanJoinRequest] = useState([])
  const [clan_creation_request, setClanCreationRequest] = useState([])
  const [branch_creation_request, setBranchCreationRequest] = useState([])
  const [member, setMember] = useState([])
  const [user, setUser]: any = useState()


  useEffect(() => {
    async function get_data() {
      const result = await get_user()
      if (!result.error) {
        setClanJoinRequest(result.clan_join_request)
        setClanCreationRequest(result.clan_creation_request)
        setBranchCreationRequest(result.branch_creation_request)
        setMember(result.member)
        setUser(result.user)
      }
    }
    get_data()
  }, [])

  return (
    <div>
      <div className="tile is-ancestor">
        <div className="tile is-6 is-vertical is-parent">
          <div className="tile is-child box content">
            <p className="title">User Details</p>
            {user && <dl>
              <dt>First Name:</dt>
              <dd><b>{user.first_name}</b></dd>
              <dt>Middle Name:</dt>
              <dd><b>{user.middle_name}</b></dd>
              <dt>Last Name:</dt>
              <dd><b>{user.last_name}</b></dd>
              <dt>Email:</dt>
              <dd><b>{user.email}</b></dd>
            </dl>}



          </div>
          <div className="tile is-child box">
            <p className="title">Requests</p>
            <dl>
              <dt>Clan Join Request:</dt>
              <dd><b>{clan_join_request.length}</b></dd>
              <dt>Clan Creation Request:</dt>
              <dd><b>{clan_creation_request.length}</b></dd>
              <dt>Branch Creation Request:</dt>
              <dd><b>{branch_creation_request.length}</b></dd>

            </dl>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box content">
            <p className="title">Member</p>
            {(member.length > 0) && <>
              {member.map((e: any) => (
                <dl key={e.id}>
                  <dt>Clan Name:</dt>
                  <dd><strong>{e.clan_detail.name}</strong></dd>
                  {(e.clan_detail.details !== null) && <>
                    <dt>Clan Details:</dt>
                    <dd><strong>{e.clan_detail.details}</strong></dd>
                  </>}
                  {(e.officer !== null) && <>
                    <dt>Officer</dt>
                  </>}

                </dl>
              ))}
            </>}

          </div>
        </div>
      </div>
    </div>

  )
}
