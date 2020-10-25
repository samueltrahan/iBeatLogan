export default function PickPlayerDD({ setPlayer }) {
  return (
    <>
      <div className="dropdown-head">
        <select
          onChange={event => setPlayer(event.target.value)}
          className="dropdown ui dropdown"
        >
          <option value="" selected disabled>
            Who are you?
          </option>
          <option value="sam">Sam Trahan</option>
          <option value="jp">JP Angelle</option>
          <option value="logan">Logan Sonnier</option>
          <option value="chris">Chris Leblanc</option>
          <option value="cody">Cody Huval</option>
          <option value="terrence">Terrence Mouton</option>
          <option value="alex">Alex Abushanab</option>
        </select>
      </div>
    </>
  );
}
