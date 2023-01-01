import { useState } from "react";
import { useNavigate } from "react-router-dom";

// *API Services Imports*
// import { patchName, patchType } from "../api_services/PatchProduct";
import PatchProduct from "../api_services/PatchProduct";
import DeleteProduct from "../api_services/DeleteProduct";

// *Design Imports*
import PostAddIcon from "@material-ui/icons/PostAdd";

const Table = (props) => {
  const [swordId, setSwordId] = useState(0);
  const [editName, setEditName] = useState("");
  const [editType, setEditType] = useState("");
  const [editLength, setEditLength] = useState(0);
  const [editMass, setEditMass] = useState(0);
  const [editPrice, setEditPrice] = useState(0);
  const [editDescription, setEditDescription] = useState("");
  const [editImageUrl, setEditImageUrl] = useState("");
  const {
    PATCHname,
    PATCHtype,
    PATCHlength,
    PATCHmass,
    PATCHprice,
    PATCHdescription,
    PATCHimageUrl,
  } = PatchProduct();
  const DELETE = DeleteProduct();

  const navigate = useNavigate();

  return (
    <div
      style={{
        border: "1px solid #363636",
        padding: "0.5rem",
        fontSize: "14px",
      }}
    >
      <table>
        <thead style={{ fontSize: "16px" }}>
          <tr>
            <th>sword_id</th>
            <th>name</th>
            <th>type</th>
            <th>length</th>
            <th>mass</th>
            <th>price</th>
            <th>description</th>
            <th>image_url</th>
          </tr>
        </thead>
        <tbody>
          {props.product &&
            props.product.map((sword) => {
              return (
                <tr
                  key={sword.sword_id}
                  style={{ borderTop: "8px solid", borderBottom: "8px" }}
                >
                  <td>{sword.sword_id}</td>
                  <td>
                    {sword.name} <br />
                    <input
                      type="text"
                      placeholder="Edit Name"
                      autoComplete="off"
                      onChange={(e) => setEditName(e.target.value)}
                      onBlur={() => setSwordId(sword.sword_id)}
                    />
                    <button
                      type="submit"
                      disabled={editName === "" ? true : false}
                      onClick={() => PATCHname(editName, swordId)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    {sword.type} <br />
                    <input
                      type="text"
                      placeholder="Edit Type"
                      autoComplete="off"
                      onChange={(e) => setEditType(e.target.value)}
                      onBlur={() => setSwordId(sword.sword_id)}
                    />
                    <button
                      disabled={editType === "" ? true : false}
                      onClick={() => PATCHtype(editType, swordId)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    {sword.length} <br />
                    <input
                      type="text"
                      placeholder="Edit Length (Num)"
                      autoComplete="off"
                      onChange={(e) => setEditLength(e.target.value)}
                      onBlur={() => setSwordId(sword.sword_id)}
                    />
                    <button
                      disabled={editLength === 0 ? true : false}
                      onClick={() => PATCHlength(editLength, swordId)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    {sword.mass} <br />
                    <input
                      type="text"
                      placeholder="Edit Mass (Num)"
                      autoComplete="off"
                      onChange={(e) => setEditMass(e.target.value)}
                      onBlur={() => setSwordId(sword.sword_id)}
                    />
                    <button
                      disabled={editMass === 0 ? true : false}
                      onClick={() => PATCHmass(editMass, swordId)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    {sword.price} <br />
                    <input
                      type="text"
                      placeholder="Edit Price (Num)"
                      autoComplete="off"
                      onChange={(e) => setEditPrice(e.target.value)}
                      onBlur={() => setSwordId(sword.sword_id)}
                    />
                    <button
                      disabled={editPrice === 0 ? true : false}
                      onClick={() => PATCHprice(editPrice, swordId)}
                    >
                      Edit
                    </button>
                  </td>
                  <td
                    style={{
                      maxWidth: "24rem",
                      whiteSpace: "nowrap",
                      overflow: "scroll",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {sword.description}
                  </td>
                  <td>
                    {sword.image_url} <br />
                    <input
                      type="text"
                      placeholder="Edit Image Url (https)"
                      autoComplete="off"
                      onChange={(e) => setEditImageUrl(e.target.value)}
                      onBlur={() => setSwordId(sword.sword_id)}
                    />
                    <button
                      disabled={editImageUrl === "" ? true : false}
                      onClick={() => PATCHimageUrl(editImageUrl, swordId)}
                    >
                      Edit
                    </button>
                  </td>
                  <td
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      marginLeft: "0.5rem",
                    }}
                  >
                    <button
                      style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
                      onClick={() => {
                        DELETE(sword.sword_id);
                        navigate("/admin/successfulDelete");
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="row"
              colSpan="2"
              style={{ textDeclaration: "underline" }}
            >
              Total Products:
            </th>
            <td colSpan="2">{props.product.length}</td>
          </tr>
        </tfoot>
      </table>

      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0.5rem",
            borderRadius: "0.5rem",
          }}
          onClick={() => navigate("/admin/create")}
        >
          Create New <PostAddIcon />
        </button>

        <button
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0.5rem",
            borderRadius: "0.5rem",
          }}
          onClick={() => navigate("/admin/replace")}
        >
          Replace all Fields of a Sword <PostAddIcon />
        </button>
      </div>

      <div style={{ marginTop: "0.5rem" }}>
        <textarea
          style={{ float: "left", marginRight: "0.5rem" }}
          cols="20"
          rows="3"
          placeholder="Edit Description"
          onChange={(e) => setEditDescription(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "8rem",
          }}
        >
          <label htmlFor="Id">
            Specify The Product Id to Edit the Description:
          </label>
          <div>
            <input
              style={{ maxWidth: "4rem" }}
              name="Id"
              type="number"
              placeholder="Id"
              onChange={(e) => setSwordId(e.target.value)}
            />
            <button
              style={{ maxWidth: "1.5rem" }}
              type="submit"
              disabled={editDescription === "" ? true : false}
              onClick={() => PATCHdescription(editDescription, swordId)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
